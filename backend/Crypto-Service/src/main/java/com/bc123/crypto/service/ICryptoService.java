package com.bc123.crypto.service;
import com.bc123.crypto.dto.CryptoDto;
import java.util.List;
import java.util.UUID;

public interface ICryptoService {

    public List<CryptoDto>getAllCrypto();
    public CryptoDto getCryptoById(UUID id);
}
