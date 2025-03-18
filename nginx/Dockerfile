# nginx 설치
FROM nginx:1.27.4-alpine

# nginx 설정 파일 만들었던 거 옮기기
COPY ./myconfig1.conf /etc/nginx/conf.d/myconfig1.conf

# default.conf 파일 지우기 (안 지우면 default.conf 파일이 우선순위가 높아서 설정이 안 될 수 있음)
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]