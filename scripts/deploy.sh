
#!/bin/bash

if [ "$#" -ne 3 ]; then
    echo "Invalid number of arguments"
    echo "./scripts/deploy.sh <NAMESPACE> <ENVIRONMENT> <IMAGE_TAG>"
    exit 1
fi

NAMESPACE="$1"
ENVIRONMENT="$2"
IMAGE_TAG="$3"

cat "k8s.yaml.template" \
    | sed "s/{{ENVIRONMENT}}/${ENVIRONMENT}/g" \
    | sed "s/{{IMAGE_TAG}}/${IMAGE_TAG}/g" \
    > k8s.yaml

kubectl --namespace "${NAMESPACE}" apply -f "k8s.yaml"
