package com.hhf.dilraba.dao;

import java.util.List;
import java.util.Map;

public interface HomeDao {

	public List<Map<String, Object>> getBanner();

	public int submitOptions(Map<String, String> map);

}
