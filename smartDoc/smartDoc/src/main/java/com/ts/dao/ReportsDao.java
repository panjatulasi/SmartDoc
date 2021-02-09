package com.ts.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.ts.db.HibernateTemplate;
import com.ts.dto.Reports;

public class ReportsDao {
private static SessionFactory sessionFactory;
	
	static {
		sessionFactory=new Configuration().configure().buildSessionFactory();
	}
	public int addReport(Reports report) {
		System.out.println(report); 
		return HibernateTemplate.addObject(report);
	}
	public List<Reports> getAllReports(String userName) {
		List<Reports> report=(List)HibernateTemplate.getObjectListByQuery("From Reports where userName ='"+userName+"' order by date desc");
		return report;	
	}
	public static List<Object> getMaxId() {
		List<Object> report=(List)HibernateTemplate.getObjectListByQuery("select max(id) From Reports");
		System.out.println(report.get(0).getClass());
		return report;
	}
	public static void main(String args[]) {
		getMaxId();
	}
	


}
