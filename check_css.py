import urllib.request
import re

html = urllib.request.urlopen("https://jagmarg-news.vercel.app").read().decode("utf-8")
match = re.search(r'href="(/_next/static/css/[^"]+\.css)"', html)
if match:
    css_url = "https://jagmarg-news.vercel.app" + match.group(1)
    print(css_url)
    css = urllib.request.urlopen(css_url).read().decode("utf-8")
    print("CSS length:", len(css))
    dark_matches = re.findall(r'\.dark', css)
    print("Dark classes found:", len(dark_matches))
else:
    print("No CSS found")
