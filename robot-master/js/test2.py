# -*- coding: utf-8 -*-
from flask import Flask, jsonify, render_template, request
from flask import make_response
import json
import requests


app = Flask(__name__)  # 实例化app对象

testInfo = {}


@app.route('/test_post/nn', methods=['GET', 'POST'])  # 路由
def test_post():
    getMsg = request.values.get('msg')
    url = 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=%s'% getMsg
    header = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
    }
    response = requests.get(url, headers=header)
    response.encoding = 'utf-8'
    text_json = json.loads(response.text)
    context = text_json['content']
    testInfo['ans'] = context
    result_json = json.dumps(testInfo)
    # Response
    resp = make_response(result_json)
    # 允许跨域访问
    resp.headers['Access-Control-Allow-Origin'] = '*'

    # print(getMsg)
    return resp


if __name__ == '__main__':
    app.run(host='0.0.0.0',  # 任何ip都可以访问
            port=7777,  # 端口
            debug=True
            )