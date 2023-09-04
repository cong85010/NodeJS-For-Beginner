const { pool } = require("./pool");

const getAllStudents = async () => {
  const result = await pool.query("select * from students");

  return result.rows;
};
 const updateStudent = async ({ id, name, age }) => {
  try {
    console.log({ id, name, age })
    const result = await pool.query(
      `UPDATE public.students SET name=$1, age=$2 WHERE id=$3;`,
      [name, age, id]
    );

    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};
 const insertStudent = async ({ name, age }) => {
  try {
    const result = await pool.query(
      "INSERT INTO public.students (name, age) VALUES ($1, $2)",
      [name, age]
    );

    return "success";
  } catch (error) {
    return "error";
  }
};
 const deleteStudent = async ({ id }) => {
  try {
    const result = await pool.query(
      "Delete FROM public.students WHERE id = $1",
      [id]
    );

    return "success";
  } catch (error) {
    return "error";
  }
};

const insertClasses = async ({name}) => {
  try {
    const result = await pool.query(
      "INSERT INTO public.classes (name) VALUES ($1)",
      [name]
    );

    return "success";
  } catch (error) {
    return "error";
  }
}

module.exports = { getAllStudents, updateStudent, insertStudent, deleteStudent, insertClasses}
