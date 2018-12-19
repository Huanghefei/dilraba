package com.hhf.dilraba.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hhf.dilraba.constant.ResultTag;
import com.hhf.dilraba.service.HomeService;

@RestController
@RequestMapping(value = "/home")
public class HomeController {

	@Autowired
	private HomeService homeService;

	@PostMapping(value = "/getBanner")
	public Map<String, Object> getBanner() {
		Map<String, Object> retMap = new HashMap<String, Object>();
		List<Map<String, Object>> bannerList = homeService.getBanner();
		retMap.put(ResultTag.RESULT, bannerList);
		retMap.put(ResultTag.STATUS, ResultTag.SUCCESS);
		return retMap;
	}

	@PostMapping(value = "/submitOptions")
	public Map<String, Object> submitOptions(@RequestBody Map<String, String> map) {
		Map<String, Object> retMap = new HashMap<String, Object>();
		homeService.submitOptions(map);
		retMap.put(ResultTag.STATUS, ResultTag.SUCCESS);
		return retMap;
	}

}
