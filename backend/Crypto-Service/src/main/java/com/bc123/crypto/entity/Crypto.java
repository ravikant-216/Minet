package com.bc123.crypto.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import java.util.UUID;

@Entity
@Table(name = "crypto")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Crypto {

    @Id
    @GeneratedValue(generator = "uuid-hibernate-generator")
    @GenericGenerator(name = "uuid-hibernate-generator", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column(unique = true, nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String symbol;

    @Column(unique = true, nullable = false)
    private String icon;

    @Column( nullable = false)
    private double price;

    @Column( name = "`change`" , nullable = false)
    private double change;

    @Column( nullable = false)
    private double marketCap;

    @Column( nullable = false)
    private double volume;

    @Column( nullable = false)
    private double circulatingSupply;

}
