FROM eclipse-temurin:11.0.20.1_1-jre-alpine

EXPOSE 8081

ADD target/spring-boot-docker.jar spring-boot-docker.jar

ENTRYPOINT [ "java", "-jar", "/spring-boot-docker.jar" ]