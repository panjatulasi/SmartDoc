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

public class DoctorDao {
	private static SessionFactory sessionFactory;
	static {
		sessionFactory=new Configuration().configure().buildSessionFactory();
	}
	public int register(Doctor doctor) {
		System.out.println(doctor); 
		return HibernateTemplate.addObject(doctor);
	}
public static Object getDoctorByUserPass(String loginId,String password) {
		
		String queryString = "from Doctor where userName = :loginId";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("loginId", loginId);
		  Object queryResult = query.uniqueResult();
		  Doctor doctor = (Doctor)queryResult;
		  //String dbPassword = doctor.getPassword();
		  String decPassword;
		  if(doctor != null) {
		  AESEncryption aesEncryption = new AESEncryption(doctor.getPassword());
			try{
				decPassword=aesEncryption.dec();
				if(decPassword != password)
					return null;
			}
			catch(Exception ex) {
				System.out.println(ex);
			}
		  }
		  return doctor; 
		}
public static Object getDoctorByUserName(String userName) {
	
	String queryString = "from Doctor where userName = :userName";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("userName", userName);
	  Object queryResult = query.uniqueResult();
	  Doctor doctor = (Doctor)queryResult;
	  return doctor; 
	}
public static int updateDoctor(Doctor doctor)
{
	int result=0;
	
	Transaction tx=null;
	
	try {
		
		Session session=sessionFactory.openSession();
		tx=session.beginTransaction();
		System.out.println("Inside Update Doctor"+doctor);
		
		session.saveOrUpdate(doctor);
		
		tx.commit();
		
		result=1;
		
	} catch (Exception e) {
	
		tx.rollback();
		
		e.printStackTrace();
	}
	
	return result;
}



}
