from bs4 import BeautifulSoup

soup = BeautifulSoup(open("./terms.html"), "html.parser")
list_ptag = []

for texts in soup.findAll():
	if texts.name == 'script':
		continue
	else:
		list_ptag.append( [texts.name, texts.text])

str_tag = str(list_ptag)
text_file = open("terms.txt", "wt")
n = text_file.write(str_tag)
text_file.close()
print(list_ptag)
