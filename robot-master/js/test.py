import requests
import json

if __name__ == '__main__':
    url = 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=%s'%'123'
    header = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
    }
    response = requests.get(url,headers=header)
    response.encoding = 'utf-8'
    text_json = json.loads(response.text)
    context = text_json['content']
    print(context)