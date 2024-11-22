# 1. dictionary oluştur . anahtar isimleri dersadi, y1,y2,s1,s2
# 2. bu dictionaryden 4 adet ders bilgilerini içeren list oluştur.

dersler = [
            {"dersadi":"Mesleki Gelişim", "y1":0,"y2":0, "s1":0, "s2":0},
            {"dersadi":"Proglamlama", "y1":0,"y2":0, "s1":0, "s2":0},
            {"dersadi":"Tasarım", "y1":0,"y2":0, "s1":0, "s2":0}
        ]
# 3. kullanıcıdan bu üç dersin notlarını alan döngüyü oluştur.
# Proglamlama dersinin 1. yazılı notunu gir:

for i in range(len(dersler)):
    dersler[i]["y1"] = input(dersler[i]["dersadi"] + " dersinin 1. yazılı notunu gir:")
    dersler[i]["y2"] = input(dersler[i]["dersadi"] + " dersinin 2. yazılı notunu gir:")
    dersler[i]["s1"] = input(dersler[i]["dersadi"] + " dersinin 1. yazılı notunu gir:")
    dersler[i]["s2"] = input(dersler[i]["dersadi"] + " dersinin 2. yazılı notunu gir:")

# dersadı            Y1 Y2 S1 S2 ORT
print()
print("ders Adı    Y1 Y2 S1 S2 ORT")
print("--------    --- --- --- --- ---")
for ders in dersler:
    ort = (int(ders["y1"])+ int(ders["y2"])+ int(ders["s1"])+ int(ders["s2"]))/4
print(ders["dersadi"], ders["y1"], ders["y2"], ders["s1"], ders["s2"], ort)