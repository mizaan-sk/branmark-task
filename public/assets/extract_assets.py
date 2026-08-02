import os
import glob

print("Checking for screenshot files...")
for root, dirs, files in os.walk("C:\\Users\\MIZAAN\\.gemini"):
    for file in files:
        if file.endswith((".png", ".jpg", ".webp")):
            print(os.path.join(root, file))
