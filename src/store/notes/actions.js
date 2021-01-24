export default {
  async loadNotes(context) {
    const response = await fetch(`${process.env.VUE_APP_ENV_MyURL}/notes`, {
      headers: {
        'Access-Control-Allow-Origin': true,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log('Error');
    }
    const notes = [];

    for (const key in responseData) {
      const note = {
        id: key,
        title: responseData[key].title,
        author: responseData[key].author,
        content: responseData[key].content,
        date: responseData[key].date
      };
      notes.push(note);
    }
    context.commit('setNotes', notes);
  },

  async addNote(context, data) {
    const noteData = {
      title: data.title,
      author: data.author,
      content: data.content,
      date: data.date
    };

    const response = await fetch(`${process.env.VUE_APP_ENV_MyURL}/notes`, {
      method: 'POST',
      body: JSON.stringify(noteData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.log('Error');
    }

    context.commit('addNote', noteData);
  }
};
