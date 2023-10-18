package com.bc123.user;

import org.flywaydb.core.Flyway;
import org.flywaydb.core.api.MigrationVersion;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;
import org.modelmapper.ModelMapper;

@SpringBootApplication
public class UserApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}
	
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}
	@Bean
	DataSource configureUMDataSource(
			@Value("${spring.datasource.url}") final String jdbcUrl,
			@Value("${spring.datasource.username}") final String jdbcUsername,
			@Value("${spring.datasource.password}") final String jdbcPassword
	) {
		final DataSource dataSource = DataSourceBuilder.create()
				.url(jdbcUrl)
				.username(jdbcUsername)
				.password(jdbcPassword)
				.build();
		runFlywayMigrations(dataSource);
		return dataSource;
	}

	private void runFlywayMigrations(final DataSource dataSource) {
		Flyway flyway = Flyway.configure()
				.dataSource(dataSource)
				.baselineOnMigrate(true)
				.baselineVersion("1")
				.locations("db/migration")
				.target(MigrationVersion.LATEST)
				.outOfOrder(true)
				.validateOnMigrate(true)
				.load();
		flyway.repair();
		flyway.migrate();
	}
}
