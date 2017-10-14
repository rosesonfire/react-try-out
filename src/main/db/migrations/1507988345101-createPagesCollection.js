import pageSchema from "./../../dataAccess/schemas/page";


const modelName = "page";

/**
 * Make any changes you need to make to the database here
 */
export async function up () {
  
  const Page = this(modelName, pageSchema);
  
  await Page.create(
    {
      id: "page_home",
      name: "home",
      dateCreated: new Date(),
      dateModified: new Date()
    },
    {
      id: "page_meeting_events",
      name: "meeting events",
      dateCreated: new Date(),
      dateModified: new Date()
    },
    {
      id: "page_yearly_events",
      name: "yearly events",
      dateCreated: new Date(),
      dateModified: new Date()
    }
  );

}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down () {
  const Page = this(modelName, pageSchema);
  await Page.remove({});
}
