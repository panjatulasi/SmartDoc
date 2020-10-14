package com.ts.dao;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

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
		
		String queryString = "from Doctor where userName = :loginId and password =:password";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("loginId", loginId);
		  query.setString("password", password);
		  Object queryResult = query.uniqueResult();
		  Doctor doctor = (Doctor)queryResult;
		  return doctor; 
		}


}
