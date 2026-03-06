import fitz
import sys

pdf_path = r'c:\Users\kisho\Documents\Portfolio\KishorKumarSridharResume.pdf'
doc = fitz.open(pdf_path)

full_text = ""
for page_num, page in enumerate(doc):
    text = page.get_text()
    full_text += f"--- Page {page_num + 1} ---\n"
    full_text += text
    full_text += "\n\n"

doc.close()

# Write to file with UTF-8 encoding
with open(r'c:\Users\kisho\Documents\Portfolio\extracted_text.txt', 'w', encoding='utf-8') as f:
    f.write(full_text)

print("PDF content extracted successfully to extracted_text.txt")
