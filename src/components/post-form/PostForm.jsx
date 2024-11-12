import React, { useCallback } from 'react'
import { Button, Select, Input, RTE } from "../index"
import PostInput from './PostInput'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

function PostForm({post, slug}) {
    // console.log(slug)
    // if(post.title){
    //     post.slug = slug
    // }
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData);
    
    console.log(userData)

    const submit = async (data) => {
        console.log(data)
        if (post) {
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

            if (file) {
                service.deleteFile(post.featuredImage);
            }

            const dbPost = await service.updatePost(post.$id, {...data, featuredImage: file ? file.$id : undefined, });
            console.log(data)
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            // const file = await service.uploadFile(data.image[0]);

            // if (file) {
            //     const fileId = file.$id;
            //     data.featuredImage = fileId;

            //     const dbPost = await service.createPost({...data, userId: userData.$id})

            //     if (dbPost) {
            //         navigate(`/post/${dbPost.$id}`)
            //     }
            // }
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
            }
            const dbPost = await service.createPost({...data, userId: userData.$id})
            console.log(data)
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
        console.log(data)
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            // in repalce there are regexp are written that will replace all the spaces with "-"
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
        } else {
            return ""
        }
    }, [])

    React.useEffect(() => {
        const subscription = watch((value, {name}) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, {shouldValidate: true}))
            }
        })

        return () => {
            subscription.unsubscribe() // used for cleaning up the async function in useEffect
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="">
            <Input
                    label=""
                    placeholder="Slug"
                    className="hidden"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
            <div className="grid grid-cols-2 gap-x-2">
                <PostInput
                    label="Title :"
                    placeholder="Title"
                    className="mb-4 col-span-1"
                    {...register("title", { required: true })}
                />
                <PostInput
                    label="Featured Image :"
                    type="file"
                    className="mb-4 col-span-1"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image")}
                />
                
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <div className='col-span-2'>
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4 "
                        {...register("status", { required: true })}
                    />
                </div>
                <div className="col-span-2">
                    <div className=''>
                        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                    </div>
                    <Button type="submit" className="w-full bg-[#18BED4] mt-3">
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
                
            </div>
        </form>
    )
}

export default PostForm