# ./Dockerfile
FROM python:3.8

# 컨테이너 내에서 코드가 실행될 경로 설정
WORKDIR /usr/src/app

# requirements.txt에 명시된 필요한 packages 설치
COPY requirements.txt ./
RUN pip install -r requirements.txt

# 현재경로에 존재하는 모든 소스파일을 이미지에 복사
COPY . .

# 8000번 포트를 외부에 개방하도록 설정
EXPOSE 8000

# uvicorn을 사용해서 서버를 실행 (image 실행시)

CMD ["uvicorn", "BemsMain:app", "--host", "0.0.0.0", "--port", "8000"]