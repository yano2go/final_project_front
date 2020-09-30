<div classname="signInForm">
<h4>sign in here</h4>
<form onSubmit={handleSubmit}>
     <label htmlFor="username">create a username</label>
     <input type='text' onChange={(event)=>this.setState({...this.state, username:event.target.value})}/>
     <label htmlFor="password">password</label>
     <input type="password" onChange={(event)=>this.setState({...this.state, password:event.target.value})}></input>
     <input value="Submit" type="submit" onClick={this.props.handleSignUp} />
</form>

</div>