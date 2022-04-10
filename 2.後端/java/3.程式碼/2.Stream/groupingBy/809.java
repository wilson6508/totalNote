public class ex7 {

	public static void main(String[] args) {
		List<Student> stds = Arrays.asList(
		        new Student("Jessy", "Java ME", "Chicago"),
		        new Student("Helen", "Java EE", "Houston"),
		        new Student("Mark", "Java ME", "Chicago"));
		stds.stream()
		    .collect(Collectors.groupingBy(Student::getCourse))  // 變Map物件 setKey
		    .forEach((src, res) -> System.out.println(src));  	 // Java EE Java ME  照順序
				   // key, value
	}

}
class Student {
	 
    String course, name, city;
 
    public Student(String name, String course, String city) {
        this.course = course;
        this.name = name;
        this.city = city;
    }
 
    public String toString() {
        return course + ":" + name + ":" + city;
    }
 
    public String getCourse() {
        return course;
    }
}
