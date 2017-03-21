package org.cedric.service;

import java.util.ArrayList;
import java.util.List;

import org.cedric.model.Groupe;

public class GroupeService {

	private Groupe g1 = new Groupe(1, "Chefs d'agence" );
	private Groupe g2 = new Groupe(2, "Clients");
	private Groupe g3 = new Groupe(3, "Ingénieur");
	private static int id = 0;
	private List<Groupe> list = new ArrayList<>();
	
	public GroupeService() {
		fillGroupe();
	}
	
	public void fillGroupe(){
		id++;
		list.add(g1);
		id++;
		list.add(g2);
		id++;
		list.add(g3);
	}
	
	public int getId(){
		return id;
	}
	
	public void setGroupe(int id, String name){
		Groupe g = this.findById(id);
		g.setName(name);
	}
	
	public void addGroupe(String name) {
		if(name.equals(null) || name.equals("") ){
			return ;
		}
		id++;
		list.add(new Groupe(id,name));
	}
	
	public void  deleteGroupe(int id) {
		Groupe g = this.findById(id);
		list.remove(g);
	}
	
	public List<Groupe> getAllGroupe(){
		return list;
	}
	
	public Groupe findById(int id) {
		Groupe g;
		int i=0;
		while (i < GroupeService.id) {
			g = list.get(i);
			i++;
			if (g.getId() == id) 
				return g;
		}
		return null;
	}
}
