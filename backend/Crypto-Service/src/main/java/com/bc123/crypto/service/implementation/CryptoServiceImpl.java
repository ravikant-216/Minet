package com.bc123.crypto.service.implementation;

import com.bc123.crypto.dto.CryptoDto;
import com.bc123.crypto.entity.Crypto;
import com.bc123.crypto.mapper.CryptoMapper;
import com.bc123.crypto.repository.CryptoRepository;
import com.bc123.crypto.service.ICryptoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@Service
public class CryptoServiceImpl implements ICryptoService {

    @Autowired
    private CryptoRepository cryptoRepository;

    @Autowired
    private CryptoMapper cryptoMapper;

    @Override
    public List<CryptoDto> getAllCrypto() {

        return cryptoRepository.findAll().stream()
                .map(cryptoMapper::convertToGetCrypto).toList();
    }

    @Override
    public CryptoDto getCryptoById(UUID id) {

        Optional<Crypto> crypto = cryptoRepository.findById(id);
        if(crypto.isPresent())
            return cryptoMapper.convertToGetCrypto(crypto.get());
        else
           throw new NoSuchElementException("Crypto with id: " + id + " not found");
    }
}
