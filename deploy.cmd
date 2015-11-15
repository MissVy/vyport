echo "Deploying portfolio"

aws deploy push --application-name vy-portfolio --s3-location s3://vyportfolio-deployment/vy-portfolio.zip --ignore-hidden-files --source 2015portfolio

aws deploy create-deployment --application-name vy-portfolio --s3-location bucket=vyportfolio-deployment,key=vy-portfolio.zip,bundleType=zip --deployment-group-name vy-portfolio-group --deployment-config-name CodeDeployDefault.AllAtOnce 