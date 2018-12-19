package com.hhf.dilraba.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hhf.dilraba.dao.HomeDao;
import com.hhf.dilraba.service.HomeService;

@Service
public class HomeServiceImpl implements HomeService {
	
	@Autowired
	private HomeDao homeDao;

	@Override
	public List<Map<String, Object>> getBanner() {
		return homeDao.getBanner();
	}

	@Override
	public int submitOptions(Map<String, String> map) {
		return homeDao.submitOptions(map);
	}

}
