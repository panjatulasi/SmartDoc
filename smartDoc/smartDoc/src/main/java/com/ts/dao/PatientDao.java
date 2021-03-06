package com.ts.dao;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.ts.dto.Doctor;
import com.ts.dto.Patient;
//import com.ts.AESEncryption;
import com.ts.db.HibernateTemplate;

public class PatientDao {
	private static SessionFactory sessionFactory;
	static {
		sessionFactory=new Configuration().configure().buildSessionFactory();
	}
	public int register(Patient patient) {
		System.out.println(patient); 
		return HibernateTemplate.addObject(patient);
	}
public static Object getPatientByUserPass(String loginId,String password) {
	String queryString = "from Patient where userName = :loginId";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("loginId", loginId);
	  Object queryResult = query.uniqueResult();
	  Patient patient = (Patient)queryResult;
	  //String dbPassword = doctor.getPassword();
	  String decPassword;
//	  if(patient != null) {
//	  
//		try{
//			//AESEncryption aesEncryption = new AESEncryption(patient.getPassword());
//			//decPassword=aesEncryption.dec();
//			//System.out.println("Inside getPatient By User Pass:"+decPassword+" "+password);
//			if(decPassword.equals(password))
//				return null;
//		}
//		catch(Exception ex) {
//			System.out.println(ex);
//			return null;
//		}
//	  }
	  return patient; 
		}
public static Object getPatientByUserName(String userName) {
	
	String queryString = "from Patient where userName = :userName";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("userName", userName);
	  Object queryResult = query.uniqueResult();
	  Patient patient = (Patient)queryResult;
	  return patient; 
	}
public static int updatePatient(Patient patient)
{
	int result=0;
	
	Transaction tx=null;
	
	try {
		
		Session session=sessionFactory.openSession();
		tx=session.beginTransaction();
		System.out.println("Inside Update Patient"+patient);
		
		session.saveOrUpdate(patient);
		
		tx.commit();
		
		result=1;
		
	} catch (Exception e) {
	
		tx.rollback();
		
		e.printStackTrace();
	}
	
	return result;
}
}
