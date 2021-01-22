package com.ts.db;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

//import javax.crypto.Cipher;
//import javax.crypto.KeyGenerator;
//import javax.crypto.SecretKey;
import javax.xml.bind.DatatypeConverter;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.ts.dto.Department;
import com.ts.dto.Patient;
import com.ts.dto.Doctor;
import com.ts.dto.Assistant;
import com.ts.dto.Pharmacist;

public class HibernateTemplate {

	private static SessionFactory sessionFactory;
	
	static {
		sessionFactory=new Configuration().configure().buildSessionFactory();
	}
	
	public static int addObject(Object obj)
	{
		System.out.println("Inside Template...");
		int result=0;
		
		Transaction tx=null;
		
		try {
			
			Session session=sessionFactory.openSession();
			tx=session.beginTransaction();
			
			session.save(obj);
			
			tx.commit();
			
			result=1;
			
		} catch (Exception e) {
		
			tx.rollback();
			
			e.printStackTrace();
		}
		System.out.println("Inside Hiber"+result);
		
		return result;
	}
	
	public static Object getObject(Class c,Serializable serializable)
	{
		Object obj=null;
		
		try {			
			return sessionFactory.openSession().get(c,serializable);
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return obj;
	}
	
	public static Object getObjectByUserPass(String loginId,String password) {
		
		String queryString = "from Patient where email = :loginId and password =:password";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("loginId", loginId);
		  query.setString("password", password);
		  Object queryResult = query.uniqueResult();
		  Patient patient = (Patient)queryResult;
		  return patient; 
		}
	/*public static Object getPatientByUserName(String userName) {
		
		String queryString = "from Patient where userName = :userName";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("userName", userName);
		  Object queryResult = query.uniqueResult();
		  Patient patient = (Patient)queryResult;
		  return patient; 
		}*/
	
	public static List<Object> getObjectListByQuery(String query)
	{
		return sessionFactory.openSession().createQuery(query).list();
	}
//public static List<Object> getAppointmentsByDepartment(String department) {
//		
//		String queryString = "from Appointments where department = :department";
//		  Query query = sessionFactory.openSession().createQuery(queryString);
//		  query.setString("department", department);
//		  
//		  Object queryResult = query.uniqueResult();
//		  return List<Appointments>; 
//		}
	
	public static int updateObject(Object obj)
	{
		int result=0;
		
		Transaction tx=null;
		
		try {
			
			Session session=sessionFactory.openSession();
			tx=session.beginTransaction();
			
			session.saveOrUpdate(obj);
			
			tx.commit();
			
			result=1;
			
		} catch (Exception e) {
		
			tx.rollback();
			
			e.printStackTrace();
		}
		
		return result;
	}
	
	public static int deleteObject(Class c,Serializable serializable)
	{
		int result=0;
		
		Session session=sessionFactory.openSession();
		
		Transaction tx=session.beginTransaction();
		
		try {
			
			Object obj=session.get(c,serializable);
			
			session.delete(obj);
			
			tx.commit();
			
			result=1;
						
		} catch (Exception e) {
			
			e.printStackTrace();
			
			tx.rollback();
		}
		
		return result;
	}

	public static List<Object> getObjectListByName(Class c, String columName, String value) {
		Session session=sessionFactory.openSession();
		  Criteria criteria = session.createCriteria(c);
			Criterion nameCriterion = Restrictions.eq(columName, value);
			criteria.add(nameCriterion);
			return criteria.list();
	}
	
	
	//Encryption And Decryption
	
//	public static SecretKey getSecretEncryptionKey() throws Exception{
//        KeyGenerator generator = KeyGenerator.getInstance("AES");
//        generator.init(128); // The AES key size in number of bits
//        SecretKey secKey = generator.generateKey();
//        return secKey;
//    }
//    public static byte[] encryptText(String plainText,SecretKey secKey) throws Exception{
//    // AES defaults to AES/ECB/PKCS5Padding in Java 7
//        Cipher aesCipher = Cipher.getInstance("AES");
//        aesCipher.init(Cipher.ENCRYPT_MODE, secKey);
//        byte[] byteCipherText = aesCipher.doFinal(plainText.getBytes());
//        return byteCipherText;
//    }
//    public static String  bytesToHex(byte[] hash) {
//        return DatatypeConverter.printHexBinary(hash);
//    }
}
