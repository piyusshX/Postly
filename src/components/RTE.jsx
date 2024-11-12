import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form';
import conf from '../conf/conf.js'

// control is responsible for sending state and all the data from component to form or Parent element

export default function RTE({name, control, label, defaultValue=""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block text-[#C5C6C7] mb-1 pl-1'>{label}</label>}

        <Controller 
            name={name || "content"}
            control={control}
            render={({field: {onChange}}) => (
                <Editor
                    initialValue={defaultValue}
                    apiKey={conf.tinyAPI}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}
