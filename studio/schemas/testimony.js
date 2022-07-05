export default {
    name: "testimony",
    title: "Testimonio",
    type: "document",
    initialValue: {
        name: "Placeholder name",
        comment: "Placeholder comment",
    },
    fields: [
        {
            name: "name",
            title: "Nombre",
            type: "string",
        },
        {
            name: "comment",
            title: "Comentario",
            type: "text",
            validation: Rule => Rule.max(200).warning("El título no debe ser de más de 200 caracteres.")
        },
        {
            name: "picture",
            title: "Foto",
            type: "image",
            options: {
                hotspot: true,
            }
        },
    ],
};
