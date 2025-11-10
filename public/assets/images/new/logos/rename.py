import os
import re
import sys

def rename_files_sequentially(folder_path):
    """
    Renames image files in a folder to sequential numbers (1.jpg, 2.png, etc.).
    It attempts to sort the files by name first.
    """
    if not os.path.isdir(folder_path):
        print(f"Error: Folder not found at '{folder_path}'")
        return

    # A list of common image extensions to target
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp')
    
    # Get all files in the directory
    all_files = os.listdir(folder_path)
    
    # Filter for files that have an image extension
    image_files = [f for f in all_files if f.lower().endswith(image_extensions) and os.path.isfile(os.path.join(folder_path, f))]

    if not image_files:
        print("No image files found to rename.")
        return

    # A better sort (natural sort) to handle names like 'file10.jpg' after 'file9.jpg'
    def natural_sort_key(s):
        return [int(text) if text.isdigit() else text.lower()
                for text in re.split('([0-9]+)', s)]

    image_files.sort(key=natural_sort_key)
    
    print(f"Found {len(image_files)} image files. Starting rename...")

    counter = 1
    for old_name in image_files:
        # Get the original file extension
        _, ext = os.path.splitext(old_name)
        ext = ext.lower()

        # Create the new sequential name
        new_name = f"{counter}{ext}"
        
        old_path = os.path.join(folder_path, old_name)
        new_path = os.path.join(folder_path, new_name)

        # Check for potential naming conflict (shouldn't happen with sequential)
        if os.path.exists(new_path) and old_name != new_name:
            print(f"Skipping: {new_path} already exists. Consider adding a prefix (e.g., f'image_{counter}{ext}').")
            continue
        
        try:
            os.rename(old_path, new_path)
            print(f"Renamed: '{old_name}' -> '{new_name}'")
            counter += 1
        except Exception as e:
            print(f"Error renaming '{old_name}': {e}")
            
    print("\nRenaming complete.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        # If no argument is provided, use the current directory
        target_folder = os.getcwd()
        print(f"No folder path provided. Using current directory: {target_folder}")
    else:
        # Use the folder path provided as a command-line argument
        target_folder = sys.argv[1]
        
    # IMPORTANT: Change the line below to the exact path of your image folder, 
    # or run the script from the folder itself.
    rename_files_sequentially(target_folder)