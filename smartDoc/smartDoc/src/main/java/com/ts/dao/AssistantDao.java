package com.ts.dao;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.ts.db.HibernateTemplate;
import com.ts.dto.Assistant;
import com.ts.dto.Patient;

public class AssistantDao {
	private static SessionFactory sessionFactory;
	static {
		sessionFactory=new Configuration().configure().buildSessionFactory();
	}
	
	public int register(Assistant assistant) {
		System.out.println(assistant); 
		return HibernateTemplate.addObject(assistant);
	}
	
public static Object getAssistantByUserPass(String loginId,String password) {
		
		String queryString = "from Assistant where userName = :loginId and password =:password";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("loginId", loginId);
		  query.setString("password", password);
		  Object queryResult = query.uniqueResult();
		  Assistant assistant = (Assistant)queryResult;
		  return assistant; 
		}
}
