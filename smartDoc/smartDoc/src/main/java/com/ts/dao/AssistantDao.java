package com.ts.dao;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;


import com.ts.db.HibernateTemplate;
import com.ts.dto.Assistant;
import com.ts.dto.Doctor;
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
	String queryString = "from Assistant where userName = :loginId";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("loginId", loginId);
	  Object queryResult = query.uniqueResult();
	  Assistant assistant = (Assistant)queryResult;
	  //String dbPassword = doctor.getPassword();
	  return assistant; 
		}
public static Object getAssistantByUserName(String userName) {
	
	String queryString = "from Assistant where userName = :userName";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("userName", userName);
	  Object queryResult = query.uniqueResult();
	  Assistant assistant = (Assistant)queryResult;
	  return assistant; 
	}
public static int updateAssistant(Assistant assistant)
{
	int result=0;
	
	Transaction tx=null;
	
	try {
		
		Session session=sessionFactory.openSession();
		tx=session.beginTransaction();
		System.out.println("Inside Update Assistant"+assistant);
		
		session.saveOrUpdate(assistant);
		
		tx.commit();
		
		result=1;
		
	} catch (Exception e) {
	
		tx.rollback();
		
		e.printStackTrace();
	}
	
	return result;
}
}
