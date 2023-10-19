package com.bc123.transaction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User extends BaseEntity {

  @Column(name = "email")
  private String email;

  @Column(name = "name")
  private String name;

  @Column(name = "password")
  private String password;
}
