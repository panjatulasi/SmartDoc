package com.ts.dao;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.ts.AESEncryption;
import com.ts.db.HibernateTemplate;
import com.ts.dto.Doctor;
import com.ts.dto.Patient;
import com.ts.dto.Pharmacist;

public class PharmacistDao {
private static SessionFactory sessionFactory;
	
	static {
		sessionFactory=new Configuration().configure().buildSessionFactory();
	}
	public int register(Pharmacist pharmacist) {
		System.out.println(pharmacist); 
		return HibernateTemplate.addObject(pharmacist);
	}
public static Object getPharmacistByUserPass(String loginId,String password) {
		
	String queryString = "from Pharmacist where userName = :loginId";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("loginId", loginId);
	  Object queryResult = query.uniqueResult();
	  Pharmacist pharmacist = (Pharmacist)queryResult;
	  //String dbPassword = doctor.getPassword();
	  String decPassword;
	  if(pharmacist != null) {
	  AESEncryption aesEncryption = new AESEncryption(pharmacist.getPassword());
		try{
			decPassword=aesEncryption.dec();
			if(decPassword != password)
				return null;
		}
		catch(Exception ex) {
			System.out.println(ex);
		}
	  }
	  return pharmacist; 
		}
public static Object getPharmacistByUserName(String userName) {
	
	String queryString = "from Pharmacist where userName = :userName";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("userName", userName);
	  Object queryResult = query.uniqueResult();
	  Pharmacist pharmacist = (Pharmacist)queryResult;
	  return pharmacist; 
	}
public static int updatePharmacist(Pharmacist pharmacist)
{
	int result=0;
	
	Transaction tx=null;
	
	try {
		
		Session session=sessionFactory.openSession();
		tx=session.beginTransaction();
		System.out.println("Inside Update Pharmacist"+pharmacist);
		
		session.saveOrUpdate(pharmacist);
		
		tx.commit();
		
		result=1;
		
	} catch (Exception e) {
	
		tx.rollback();
		
		e.printStackTrace();
	}
	
	return result;
}
}
