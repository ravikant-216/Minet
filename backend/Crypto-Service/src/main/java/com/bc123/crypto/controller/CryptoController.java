package com.bc123.crypto.controller;

import com.bc123.crypto.dto.CryptoDto;
import com.bc123.crypto.service.ICryptoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

import static com.bc123.crypto.util.AppConstants.CRYPTO_SERVICE_ENDPOINT;

@RestController
@RequestMapping(CRYPTO_SERVICE_ENDPOINT)
@Slf4j
public class CryptoController {

    @Autowired
    private ICryptoService cryptoService;

    @GetMapping
    public ResponseEntity<List<CryptoDto>> getAllCrypto(){
        log.info("GET /api/v1/crypto getAllCrypto() - no params");
        return new ResponseEntity<>( cryptoService.getAllCrypto(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CryptoDto> getCryptoById(@PathVariable UUID id){
        log.info("GET /api/v1/crypto getCryptoById() - cryptoId: '" + id + "'");
        return new ResponseEntity<>(cryptoService.getCryptoById(id),HttpStatus.OK);
    }
}
