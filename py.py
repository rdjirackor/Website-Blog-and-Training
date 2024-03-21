import requests
from bs4 import BeautifulSoup
page=requests.get("https://www.wired.com/category/security/")
content_=BeautifulSoup(page.content, "html.parser")
print(page)

images = content_.find_all("img", class_="ResponsiveImageContainer-eybHBd fptoWY responsive-image__image")

image_src_list = [img['src'] for img in images]
n=len(image_src_list)
image_links=[]
for i in range(n):
    if image_src_list[i].startswith("https://"):
        image_links.append(image_src_list[i])
print(image_links)
    



#temperature_=content_.find_all(class_="DailyContent--temp--1s3a7")
#temp_=[temp.get_text() for temp in temperature_]
#to remove values for night, the i is more of a dummy, i don't know if it will bring up an error since i already used temp,  hence i
#print(temp_)


#narrativ=content_.find_all(class_="DailyContent--narrative--3Ti6_")
#narrative_=[narrate.get_text() for narrate in narrativ]
#print(narrative_)





