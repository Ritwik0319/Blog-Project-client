import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const CommentTable = ({ comment, fetchComments, index }) => {
  const { blog, createdAt, _id } = comment
  const blogDate = new Date(createdAt)

  const { axios } = useAppContext()

  const aproveComment = async () => {
    try {
      const { data } = await axios.post('/api/admin/approve-comment', { id: _id })
      if (data.success) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteComment = async () => {
    try {
      const confirm = window.confirm("Are you sure, you want to delet this comment?")
      if (!confirm) return;
      const { data } = await axios.post('api/admin/delete-comment', { id: _id })
      if (data.success) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className='order-y border-gray-400'>
      <td className='px-6 py-4'>
        <b className='font-medium text-gray-600'>Blog</b> :{blog.title}
        <br />
        <br />
        <b className='font-medium text-gray-600'>Name</b> : {comment.name}
        <br />
        <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
      </td>

      <td className='px-6 py-6 max-sm:hidden'>
        {blogDate.toLocaleDateString()}
      </td>

      <td className='px-6'>
        <div className='inline-flex items-center gap-4'>
          {!comment.isApproved ?
            <img onClick={aproveComment} src={assets.tick_icon} alt="tick icon" className='w-5 hover:scale-110 cursor-pointer transition-all' />
            : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>
          }
          <img onClick={deleteComment} src={assets.bin_icon} alt="trash bin icon" className='w-5 hover:scale-110 transition-all cursor-pointer' />
        </div>
      </td>
    </tr>
  )
}

export default CommentTable