from PIL import Image
import argparse
import os
import sys


def remove_white_background(img, threshold=240):
    """Remove white background from image and return RGBA image."""
    # Convert to RGBA if not already
    if img.mode != "RGBA":
        img = img.convert("RGBA")

    # Get image data
    data = img.getdata()

    # Create new image data with transparent white pixels
    new_data = []
    for item in data:
        # If pixel is white or near-white (above threshold)
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0))  # Transparent
        else:
            new_data.append(item)  # Keep original

    # Update image data
    img.putdata(new_data)
    return img


def crop_to_content(img, margin=20):
    """Crop image to content with margin."""
    # Get bounding box of non-transparent pixels
    bbox = img.getbbox()

    if bbox:
        # Add margin
        left = max(0, bbox[0] - margin)
        top = max(0, bbox[1] - margin)
        right = min(img.width, bbox[2] + margin)
        bottom = min(img.height, bbox[3] + margin)

        # Crop image
        return img.crop((left, top, right, bottom))
    else:
        return img  # Return original if no content found


def process_image(
    input_path,
    output_path=None,
    margin=20,
    threshold=240,
    remove_bg=True,
    crop=True,
):
    """
    Process image: remove background and/or crop to content.

    Args:
        input_path: Path to input image
        output_path: Path to output image (default: adds '-processed' suffix)
        margin: Margin in pixels for cropping (default: 20)
        threshold: Threshold for white background removal (default: 240)
        remove_bg: Whether to remove white background (default: True)
        crop: Whether to crop to content (default: True)
    """
    if not os.path.exists(input_path):
        print(f"Error: File not found: {input_path}")
        return False

    try:
        # Open image
        img = Image.open(input_path)
        print(f"Processing: {input_path} ({img.size[0]}x{img.size[1]})")

        # Remove white background
        if remove_bg:
            img = remove_white_background(img, threshold)
            print(f"  ✓ Background removed (threshold: {threshold})")

        # Crop to content
        if crop:
            original_size = img.size
            img = crop_to_content(img, margin)
            if img.size != original_size:
                print(f"Cropped to {img.size[0]}x{img.size[1]})(margin: {margin}px)")
            else:
                print("No cropping needed")

        # Determine output path
        if output_path is None:
            name, ext = os.path.splitext(input_path)
            if remove_bg and crop:
                output_path = f"{name}-processed.png"
            elif remove_bg:
                output_path = f"{name}-removebg.png"
            elif crop:
                output_path = f"{name}-crop.png"
            else:
                output_path = f"{name}-processed{ext}"

        # Save as PNG to preserve transparency
        img.save(output_path, "PNG")
        print(f"  ✓ Saved: {output_path}")
        return True

    except Exception as e:
        print(f"Error processing {input_path}: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Remove white background and crop images",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )

    parser.add_argument("files", nargs="+", help="Input image file(s)")
    parser.add_argument(
        "--margin",
        type=int,
        default=20,
        help="Margin in pixels for cropping (default: 20)",
    )
    parser.add_argument(
        "--threshold",
        type=int,
        default=240,
        help="Threshold for white background removal 0-255 (default: 240)",
    )
    parser.add_argument("--output", "-o", help="Output file path")
    parser.add_argument(
        "--no-remove-bg", action="store_true", help="Skip background removal"
    )
    parser.add_argument("--no-crop", action="store_true", help="Skip cropping")

    args = parser.parse_args()

    remove_bg = not args.no_remove_bg
    crop = not args.no_crop

    if not remove_bg and not crop:
        print("Error: Use at least one of --no-remove-bg or --no-crop.")
        sys.exit(1)

    # Process each file
    success_count = 0
    for file_path in args.files:
        output = args.output if len(args.files) == 1 else None
        if process_image(
            file_path, output, args.margin, args.threshold, remove_bg, crop
        ):
            success_count += 1
        print()

    print(f"Processed {success_count}/{len(args.files)} file(s) successfully")


if __name__ == "__main__":
    main()
