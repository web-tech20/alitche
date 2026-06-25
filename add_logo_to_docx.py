#!/usr/bin/env python3
"""
add_logo_to_docx.py
Usage: python add_logo_to_docx.py --logo logo.png --files "*.docx" --position header-right --height 72

Installs logo into header of each DOCX file in the working directory.
"""
import argparse
from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt
from docx.enum.section import WD_HEADER_FOOTER
from PIL import Image


def add_logo_to_docx(docx_path: Path, logo_path: Path, height_px: int, position: str = 'header-right'):
    doc = Document(docx_path)
    sections = doc.sections
    # compute logo size in inches from pixel height (assuming 96 dpi)
    dpi = 96
    height_in = height_px / dpi
    for section in sections:
        header = section.header
        # clear existing header contents if any
        # we'll add a single paragraph with a right-aligned run containing the image
        para = header.paragraphs[0] if header.paragraphs else header.add_paragraph()
        para.clear()
        if position.startswith('header'):
            if 'right' in position:
                para.alignment = 2  # right
            elif 'center' in position:
                para.alignment = 1  # center
            else:
                para.alignment = 0  # left
            run = para.add_run()
            run.add_picture(str(logo_path), width=None, height=Inches(height_in))
    doc.save(docx_path.with_name(docx_path.stem + '_with_logo' + docx_path.suffix))


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--logo', required=True, help='Path to logo image (png/jpg/svg)')
    parser.add_argument('--files', default='*.docx', help='Glob pattern for target docx files')
    parser.add_argument('--position', default='header-right', choices=['header-right','header-center','header-left','footer-right','footer-center','footer-left'])
    parser.add_argument('--height', type=int, default=72, help='Height in pixels for the logo')
    args = parser.parse_args()

    logo = Path(args.logo)
    if not logo.exists():
        print('Logo not found:', logo)
        raise SystemExit(1)

    files = list(Path('.').glob(args.files))
    if not files:
        print('No matching DOCX files found for pattern', args.files)
        raise SystemExit(1)

    for f in files:
        print('Processing', f)
        add_logo_to_docx(f, logo, args.height, args.position)
        print('Saved', f.with_name(f.stem + '_with_logo' + f.suffix))
