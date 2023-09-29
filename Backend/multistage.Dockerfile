
# BUILD STAGE
FROM maven:3.8.6-openjdk-11-slim as build
WORKDIR /workspace/app

COPY pom.xml .
COPY src src

RUN mvn install -DskipTests

# RUN STAGE
FROM eclipse-temurin:11.0.20.1_1-jre-alpine

ARG JAR_PATH=/workspace/app/target

COPY --from=build ${JAR_PATH}/spring-boot-docker.jar .

EXPOSE 8081

ENTRYPOINT [ "java", "-jar", "/spring-boot-docker.jar" ]

