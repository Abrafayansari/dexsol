import os
import sys

pdf_path = r"c:\Users\personal\Desktop\dexsol-digital-agency\Dexsol- Branding Final .pdf"
output_path = r"c:\Users\personal\Desktop\dexsol-digital-agency\branding_guidelines.txt"

def install_and_import(package):
    import importlib
    try:
        importlib.import_module(package)
    except ImportError:
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
    finally:
        globals()[package] = importlib.import_module(package)

try:
    # Try importing pypdf
    try:
        import pypdf
    except ImportError:
        print("pypdf not found. Attempting to install pypdf...")
        install_and_import('pypdf')
        import pypdf
        
    print("Reading PDF file using pypdf...")
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for i, page in enumerate(reader.pages):
        text += f"\n--- Page {i+1} ---\n"
        text += page.extract_text()
        
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Success! Extracted text written to: {output_path}")

except Exception as e:
    print(f"Error during PDF text extraction: {e}")
    # Try using PyPDF2 as fallback
    try:
        import PyPDF2
        print("Trying PyPDF2...")
        reader = PyPDF2.PdfReader(pdf_path)
        text = ""
        for i, page in enumerate(reader.pages):
            text += f"\n--- Page {i+1} ---\n"
            text += page.extract_text()
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Success with PyPDF2! Extracted text written to: {output_path}")
    except Exception as e2:
        print(f"Error during PyPDF2 extraction: {e2}")
