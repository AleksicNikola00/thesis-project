package com.ftn.thesisProject;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;



@SpringBootApplication
public class ThesisProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThesisProjectApplication.class, args);
	}

}

// class added for testing so we can stop scheduler jobs
@Configuration
@EnableScheduling
@ConditionalOnProperty(name="scheduler.enabled",matchIfMissing = true)
class SchedulerConfiguration{

}
