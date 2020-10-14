package com.ts.dao;

import org.hibernate.SessionFactory;

import com.ts.db.HibernateTemplate;
import com.ts.dto.Assistant;

public class AssistantDao {
	private SessionFactory factory = null;
	public int register(Assistant assistant) {
		System.out.println(assistant); 
		return HibernateTemplate.addObject(assistant);
	}
	public  Assistant getAssistantByUserPass(String loginId,String password) {

		return (Assistant)HibernateTemplate.getObjectByUserPass(loginId,password);
	}

}
