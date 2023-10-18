package com.bc123.crypto.mapper;

import com.bc123.crypto.dto.CryptoDto;
import com.bc123.crypto.entity.Crypto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.modelmapper.ModelMapper;

@Component
public class CryptoMapper {

    @Autowired
    private ModelMapper modelMapper;

    public CryptoDto convertToGetCrypto(Crypto crypto) {
        return modelMapper.map(crypto, CryptoDto.class);
    }

}
