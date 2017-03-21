package org.cedric.service;

import java.util.ArrayList;
import java.util.List;

import org.cedric.model.Individu;

public class IndividuService {

	private Individu i1 = new Individu(1,"Nouel" , "Jodoin", "045050", "jojo@hom.fr", "petit comment number 01", 1);
	private Individu i2 = new Individu(2, "Amorette", "Austin", "06070", "auau@hom.fq", "petit comment number 02", 2);
	private Individu i3 = new Individu(3, "Alphonse", "Salois", "064052", "salsa@gomq.fr", "petit comment number 03", 3);
	private Individu i4 = new Individu(4, "Bernier", "Clarice", "064523", "sqd@dqd.fr", "petit comment number 04", 4);
	private Individu i5 = new Individu(5, "Salois", "Roslyn", "06423543", "rosl@dqo.fr", "petit comment number 05",3);
	private Individu i6 = new Individu(6, "Vaillancourt", "Angelique", "054353", "angedu@dqok.fr", "petit comment number 06",4 );
	private Individu i7 = new Individu(7, "Brodeur", "Christelle", "05876", "cricri@doqs.fr", "petit comment number 07", 2);
	private Individu i8 = new Individu(8, "Audibert", "Christophe", "060452", "totophe@hosqd.fr", "petit comment number 08", 3);
	private Individu i9 = new Individu(9, "Bussière", "Javier", "0542678", "jaja@dok.fr", "petit comment number 09", 1);
	private Individu i10 = new Individu(10, "Rano", "Cedric", "054926", "cedric@hotmail.fr", "petit comment number 10", 3);
	private Individu i11 = new Individu(11, "Grandbois", "Patience", "054273", "pati@disq.fr", "petit comment number 11", 2);
	private Individu i12 = new Individu(12, "Parisato", "Lilian", "0609034", "lili@fzqf.fr", "petit comment number 12", 3);
	private Individu i13 = new Individu(13, "GrandBois", "Arthur", "5064606", "arhtur@fqzer.fr", "petit comment number 13", 1);
	private Individu i14 = new Individu(14, "Elric", "Alphonse", "546076", "alphoi@fret.fr", "petit comment number 14", 3);
	private Individu i15 = new Individu(15, "Benoît", "Jean", "0645607", "jeanB@gesg.fr", "petit comment number 15", 2);
	private Individu i16 = new Individu(16, "Dolle", "Fabrice", "60780680", "FabD@bgfdbgn.fr", "petit comment number 16", 4);
	private Individu i17 = new Individu(17, "Faubourg", "Françoise", "076054", "FauFran@dibfsd.fr", "petit comment number 17", 5);
	private Individu i18 = new Individu(18, "Hoareau", "Julien", "076800678", "JuJU@bfdb.fr", "petit comment number 18", 6);
	private Individu i19 = new Individu(19, "Poltron", "Carl", "0768068", "PoPo@bfdb.fr", "petit comment number 19", 5);
	private Individu i20 = new Individu(20, "Lezay", "Sarah", "06780686", "Sasa@sfzr.fr", "petit comment number 20", 4);
	private static int id = 0;
	private List<Individu> list = new ArrayList<>();
	
	public IndividuService() {
		fillIndividu();
	}
	
	public void fillIndividu(){
		id++;
		list.add(i1);
		id++;
		list.add(i2);
		id++;
		list.add(i3);
		id++;
		list.add(i4);
		id++;
		list.add(i5);
		id++;
		list.add(i6);
		id++;
		list.add(i7);
		id++;
		list.add(i8);
		id++;
		list.add(i9);
		id++;
		list.add(i10);
		id++;
		list.add(i11);
		id++;
		list.add(i12);
		id++;
		list.add(i13);
		id++;
		list.add(i14);
		id++;
		list.add(i15);
		id++;
		list.add(i16);
		id++;
		list.add(i17);
		id++;
		list.add(i18);
		id++;
		list.add(i19);
		id++;
		list.add(i20);
	}
	
	public int getId(){
		return this.id;
	}
	
	public List<Individu> getAllIndividu(){
		return list;
	}
	
	public Individu findById(int id) {
		Individu ind;
		int i=0;
		while (i < this.id) {
			ind = list.get(i);
			i++;
			if (ind.getId() == id) 
				return ind;
		}
		return null;
	}
	
	public void setIndividu(Individu i) {
		Individu ind = findById(i.getId());
		ind.setName(i.getName());
		ind.setFirstName(i.getFirstName());
		ind.setPhone(i.getPhone());
		ind.setMail(i.getMail());
		ind.setCom(i.getCom());
		ind.setIdGroupe(i.getIdGroupe());
		
	}
	
	public void addIndividu(Individu i) {
		if(i.getName().equals(null) || i.getName().equals("") || i.getFirstName().equals("")|| i.getFirstName().equals(null)) 
			return ;
		id++;
		list.add(i);
	}
	
	public void deleteIndividu(int id) {
		Individu i = findById(id);
		list.remove(i);
	}
}
