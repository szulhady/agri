export default function ({ $auth, redirect }) {
  if (!$auth.hasScope('admin')) {
    // console.log("this is not admin")
    return redirect('/')
  }
}