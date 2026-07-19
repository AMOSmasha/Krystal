from pathlib import Path
import json

ROOT=Path(__file__).parent
photos=ROOT/"photos"
videos=ROOT/"videos"

img_ext={".jpg",".jpeg",".png",".webp",".gif"}
vid_ext={".mp4",".mov",".m4v",".webm"}

items=[]

if photos.exists():
    for f in sorted(photos.iterdir()):
        if f.is_file() and f.suffix.lower() in img_ext:
            items.append({"type":"image","src":"photos/"+f.name,"title":f.stem,"tags":[]})

if videos.exists():
    for f in sorted(videos.iterdir()):
        if f.is_file() and f.suffix.lower() in vid_ext:
            items.append({"type":"video","src":"videos/"+f.name,"title":f.stem,"tags":[]})

with open(ROOT/"media.js","w",encoding="utf-8") as fp:
    fp.write("const mediaItems = ")
    json.dump(items, fp, ensure_ascii=False, indent=2)
    fp.write(";\n\nconst tagLabels = {\\n  all:\"Tous\"\\n};\n")

print(f"{len(items)} médias trouvés.")
print("media.js généré.")
input("Entrée pour fermer...")
