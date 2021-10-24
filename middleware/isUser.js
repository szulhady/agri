
export default function ({ $auth, redirect }) {
  if (!$auth.hasScope('user')) {
    console.log("this is not user")
    return redirect('/overview-admin')
  }

}