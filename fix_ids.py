import os, glob, uuid, re
for f in glob.glob('src/app/**/*.tsx', recursive=True):
  content = open(f, encoding='utf-8').read()
  if 'type=\"application/ld+json\"' in content:
    content = re.sub(r'<Script\s+type=\"application/ld\+json\"', lambda m: f'<Script id=\"jsonld-{uuid.uuid4().hex[:8]}\" type=\"application/ld+json\"', content)
    open(f, 'w', encoding='utf-8').write(content)
